const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const {TypeGuards} = require('./project');

const PrintTypeScript = function () {
    const me = this;
    me.fromProject = function (project) {
        let sources = project.getSources();
        let dirOut = project.getDirOut();
        for (let source of  sources) {
            me.fromSource(source, dirOut)
        }
    }
    me.getFileSource = function (p) {
        if (TypeGuards.isSourceFile(p)) {
            return p.getFileSource();
        } else {
            return me.getFileSource(p.getParent());
        }

    }

    me.fromParameters = function (parameters, w, imports) {
        let cc = "";
        for (let pareameter  of parameters) {
            w.writeToken(pareameter.name);
            if (typeof  pareameter.type == 'string') {
                w.writeToken(":");
                w.writeToken(pareameter.type);
            } else if (pareameter.type) {
                let fileSource = me.getFileSource(pareameter.type);
                if (!imports[fileSource]) {
                    imports[fileSource] = {}
                }
                imports[fileSource][pareameter.type.getName()] = pareameter.type;
                w.writeToken(":");
                w.writeToken(pareameter.type.getName());
            } else {
            }
            if (cc) {
                w.writeToken(cc);
            }
            cc = ',';
        }
    }
    me.fromStatements = function (statements, w, imports) {
        for (let statement of statements) {
            if (TypeGuards.isStatement(statement)) {
                let value = statement.getValue();
                w.write(value);
                w.breakLine();
            } else if (TypeGuards.isImportDeclaration(statement)) {
                let namedImports = statement.getNamedImports();
                w.writeToken('import');
                w.writeToken('{');
                let b;
                for (let namedImport of namedImports) {
                    if (b) {

                        w.writeToken(b);
                    }
                    w.writeToken(namedImport);
                    b = ",";
                }
                w.writeToken('}');
                w.writeToken('from');
                let moduleSpecifier = statement.getModuleSpecifier();
                w.writeToken('"' + moduleSpecifier + '"');
                w.writeToken(';');
            } else if (TypeGuards.isFunctionDeclaration(statement)) {
                w.breakLine();
                let isExported = statement.isExported();
                if (isExported) {
                    w.writeToken('export');
                }
                w.writeToken('const');
                w.writeToken(statement.getName());
                w.writeToken("=");
                w.writeToken("function");
                w.writeToken("(");
                me.fromParameters(statement.getParameters(), w, imports)
                w.writeToken(")");
                w.writeToken("{");
                let wb = w.block();
                wb.writeToken(statement.getBodyText());
                w.writeToken("}");

            } else if (TypeGuards.isClassDeclaration(statement)) {
                let isExported = statement.isExported();
                if (isExported) {
                    w.writeToken('export');
                }
                w.writeToken('class');
                w.writeToken(statement.getName());
                w.writeToken("{");
                let wb = w.block();
                me.fromStatements(statement.getStatements(), wb, imports);
                w.writeToken("}");
            } else if (TypeGuards.isPropertyDeclaration(statement)) {
                w.writeToken(statement.getName());
                w.writeToken(";");

                let ii = statement.getImports();
                if (ii) {


                    for (let type of  ii) {

                        let fileSource = me.getFileSource(type);

                        if (!imports[fileSource]) {
                            imports[fileSource] = {}
                        }
                        imports[fileSource][type.getName()] = type;
                    }

                }

                me.fromStatements([statement.getGetAccessor()], w, imports);
                me.fromStatements([statement.getSetAccessor()], w, imports);
                statement.getGetAccessor()
            } else if (TypeGuards.isSetAccessorDeclaration(statement)) {
                w.writeToken("set");
                w.writeToken(statement.getName());

                w.writeToken("(");
                me.fromParameters(statement.getParameters(), w, imports)
                w.writeToken(")");
                w.writeToken("{");
                let wb = w.block();
                wb.writeToken(statement.getBodyText());
                w.writeToken("}");
            } else if (TypeGuards.isGetAccessorDeclaration(statement)) {
                w.writeToken("get");
                w.writeToken(statement.getName());
                w.writeToken("(");
                w.writeToken(")");
                w.writeToken("{");
                let wb = w.block();
                wb.writeToken(statement.getBodyText());
                w.writeToken("}");
            } else {
                console.log(statement)
            }


        }
    }
    me.fromSource = function (source, dirOut) {
        let fileSource = source.getFileSource();
        let statements = source.getStatements();
        let s = "";
        let Write = function () {
            this.write = function (c) {
                s += c;
            }
            this.writeToken = function (c) {
                s += c + " ";

            }
            this.breakLine = function () {
                s += '\n';
            }
            this.block = function () {
                return new Write();
            }
        }
        let w = new Write();
        let imports = {};
        me.fromStatements(statements, w, imports);
        let sI = "";
        for (let ii in imports) {
            let o = [];
            for (let kk in imports[ii]) {
                o.push(kk);
            }

            if (fileSource!=ii){

                sI += "import {" + o.join(",") + "} from \"./" + path.relative(dirOut, ii).replace(/\.[^/.]+$/, "") + "\";\n"
            }

        }
        fs.writeFileSync(fileSource, sI + s);

    }
}

module.exports = {
    printTypeScript: new PrintTypeScript()
}