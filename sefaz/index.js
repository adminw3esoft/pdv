const {printTypeScript} = require("./typescript");
const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const parse = require('xml-parser');
const {Project, TypeGuards} = require('./project');
const JsParser = function (dir, dirOut) {
    fsExtra.removeSync(dirOut);
    if (!fs.existsSync(dirOut)) {
        fsExtra.mkdirsSync(dirOut)
    }
    const parser = function (moduleName, objXsd, project, deps) {
        const source = project.createSourceFile(dirOut + "/" + moduleName + ".ts");
        source.addStatements("/* --------\n  This is a generated file. All edits will be overwritten! \n-------- */")
        source.addImportDeclaration({namedImports: ['validate'], moduleSpecifier: '../../Model'});

        parserNode(objXsd.root, source, deps)

        return source;
    }
    const parserNodeChild = (node, n, deps) => {
        let data = {};
        for (let _node of node.children) {
            if (_node.name == 'xs:simpleType') {

                let v = parserNode(_node, n, deps);
                if (v) {
                    v(data);
                }
            }
        }
        for (let _node of node.children) {
            if (_node.name == 'xs:complexType') {

                let v = parserNode(_node, n, deps);
                if (v) {
                    v(data);
                }
            }
        }
        for (let _node of node.children) {
            if (_node.name != 'xs:simpleType' && _node.name != 'xs:complexType') {

                let v = parserNode(_node, n, deps);
                if (v) {
                    v(data);
                }
            }
        }
        return data;
    }

    const fiName = (c) => {
        return c.getName();
    }


    const getSourceOrNamespace = function (n) {
        if (TypeGuards.isSourceFile(n)) {
            return n;
        } else if (TypeGuards.isNamespaceDeclaration(n)) {
            return n;
        }

        return getSourceOrNamespace(n.getParent())
    }

    const parserNode = function (node, n, deps) {
        if (node.name == 'xs:attribute') {
            if (TypeGuards.isClassDeclaration(n)) {


                const property = n.addProperty({
                    name: "_" + node.attributes.name,
                    getAccessor: {
                        name: node.attributes.name,
                        bodyText: "return this._" + node.attributes.name + ";"
                    },
                    setAccessor: {
                        name: node.attributes.name,
                        parameters: [{name: "value", type: "any"}]
                    }

                });
                parserNodeChild(node, property, deps);
                return (value) => {
                    if (!value.props) {
                        value.props = {};
                    }
                    value.props[node.attributes.name] = {
                        name: node.attributes.name,
                        property: property
                    }
                };
            } else {
                console.log("xs:attribute")
            }
        } else if (node.name == 'xs:schema') {
            parserNodeChild(node, n, deps);

        } else if (node.name == 'attribute') {
            console.log(n.getKind())

        } else if (node.name == 'schema') {
            console.log(n.getKind())

        } else if (node.name == 'complexType') {
            console.log(n.getKind())

        } else if (node.name == 'simpleContent') {
            console.log(n.getKind())

        } else if (node.name == 'extension') {
            console.log(n.getKind())

        } else if (node.name == 'sequence') {
            console.log(n.getKind())

        } else if (node.name == 'element') {
            console.log(n.getKind())

        } else if (node.name == 'enumeration') {
            console.log(n.getKind())

        } else if (node.name == 'xs:element') {
            if (TypeGuards.isSourceFile(n)) {
                let _n = node.attributes.name.replace(/^([a-z])/g, function (v, b) {
                    return b.toUpperCase()
                })
                const method = n.addFunction({
                    isExported: true,
                    parameters: [{name: "value", type: deps[node.attributes.type] || 'any'}],
                    name: _n
                });

                deps[_n] = method;

                parserNodeChild(node, method, deps);
                return (value) => (value.method = method);
            } else if (TypeGuards.isClassDeclaration(n)) {


                let type = 'any'
                let bodyText;


                let imports;
                if (node.attributes.type ) {

                    let ddd = node.attributes.type;
                    if (node.attributes.type.indexOf(':')>-1){
                        ddd =node.attributes.type.split(":")[1];
                    }

                    if ( deps[ddd]) {

                        if (TypeGuards.isFunctionDeclaration(deps[ddd])) {
                            //console.log(deps[node.attributes.type])
                            imports=[deps[ddd]];
                            bodyText = "" + ddd + "(value);\n" +
                                "this._" + node.attributes.name + "=value\n";
                        } else if (TypeGuards.isClassDeclaration(deps[ddd])) {
                            type = (deps[ddd])
                        } else {

                        }
                    }else if (node.attributes.type=='xs:base64Binary'){

                    }else if (node.attributes.type=='xs:dateTime'){

                    }else if (node.attributes.type=='ds:DigestValueType'){

                    }else if (node.attributes.type=='xs:date'){

                    }else {

                       // console.log(Object.keys(deps))
                        console.log(node.attributes.type)
                    }

                }
                const property = n.addProperty({
                    imports:imports,
                    name: "_" + node.attributes.name,
                    getAccessor: {
                        name: node.attributes.name,
                        bodyText: "return this._" + node.attributes.name + ";"
                    },
                    setAccessor: {
                        name: node.attributes.name,
                        bodyText: bodyText,
                        parameters: [{name: "value", type: type}]
                    }

                });
                parserNodeChild(node, property, deps);
                return (value) => {
                    if (!value.props) {
                        value.props = {};
                    }
                    value.props[node.attributes.name] = {
                        name: node.attributes.name,
                        property: property
                    }
                };
            } else {

                console.log("xs:element")
            }
        } else if ('xs:annotation' == node.name) {
            n.addJsDoc(node.children[0].content);
        } else if ('xs:restriction' == node.name || 'restriction' == node.name) {
            return (value) => (value.restriction = parserNodeChild(node, n, deps));
        } else if ('xs:maxLength' == node.name) {
            return (value) => (value.maxLength = node.attributes.value);
        } else if ('xs:pattern' == node.name) {
            return (value) => (value.pattern = node.attributes.value);
        } else if ('xs:whiteSpace' == node.name) {
            return (value) => (value.whiteSpace = node.attributes.value);
        } else if ('xs:minLength' == node.name) {
            return (value) => (value.minLength = node.attributes.value);
        } else if ('xs:minInclusive' == node.name) {
            return (value) => (value.minInclusive = node.attributes.value);
        } else if ('xs:maxInclusive' == node.name) {
            return (value) => (value.maxInclusive = node.attributes.value);
        } else if ('xs:enumeration' == node.name) {
            return (value) => {
                if (!value.enumeration) {
                    value.enumeration = []
                }
                value.enumeration.push(node.attributes.value)
            };
        } else if (node.name == 'xs:simpleType' || node.name == 'simpleType') {
            if (TypeGuards.isSourceFile(n)) {
                const method = n.addFunction({
                    isExported: true,
                    parameters: [{name: "value", type: "any"}],
                    name: node.attributes.name
                });
                deps[node.attributes.name] = method;
                let data = parserNodeChild(node, method, deps);
                method.setBodyText(`validate(value,${JSON.stringify(data.restriction)});`);
            } else if (TypeGuards.isFunctionDeclaration(n)) {
                let data = parserNodeChild(node, n, deps);
                n.setBodyText(`validate(value,${JSON.stringify(data.restriction)});`);
            } else if (TypeGuards.isPropertyDeclaration(n)) {
                let data = parserNodeChild(node, n, deps);
                n.getName()
                n.getSetAccessor().setBodyText(`validate(value,${JSON.stringify(data.restriction)});\nthis.${n.getName()}=value`);
            } else {
                console.log("xs:simpleType")
            }
        } else if (node.name == 'xs:complexType') {
            if (TypeGuards.isSourceFile(n)) {
                let _n = node.attributes.name.replace(/^([a-z])/g, function (v, b) {
                    return b.toUpperCase()
                });
                const c = n.addClass({
                    isExported: true,
                    name: _n
                });

                deps[_n] = c;

                let data = parserNodeChild(node, c, deps);
            } else if (TypeGuards.isFunctionDeclaration(n)) {
                let _n = n.getName().replace(/^([a-z])/g, function (v, b) {
                    return b.toUpperCase()
                });
                const c = n.getParent().addClass({
                    isExported: true,
                    name: _n
                });
                deps[_n] = c;

                let data = parserNodeChild(node, c, deps);
            } else if (TypeGuards.isPropertyDeclaration(n)) {
                let nnn = n.getSetAccessor().getName();
                let _C = n.getParent().getName()
                let _n = nnn.replace(/^([a-z])/g, function (v, b) {
                    return b.toUpperCase()
                });
                let p = getSourceOrNamespace(n);
                const c = p.addClass({
                    isExported: true,
                    name: _C + "_" + _n
                });

                let s = n.getSetAccessor();
                let g = n.getGetAccessor();
                if (g) {
                    g.setReturnType((_C + "_" + _n));
                }
                if (s) {
                    s.getParameters()[0].type = (_C + "_" + _n)

                    s.setBodyText(`this.${n.getName()}=value`)
                }


                parserNodeChild(node, c, deps);
            } else {
                console.log("xs:complexType")
            }
        } else if (node.name == 'xs:choice') {
            parserNodeChild(node, n, deps);
        } else if ('xs:sequence' == node.name) {
            parserNodeChild(node, n, deps);
        } else {
            for (let _node of node.children) {
                parserNode(_node, n, deps);
            }
        }
    };
    let baseNames = ['xs:string', 'xs:token', 'xs:unsignedShort', 'TString', 'nfe:TString']

    // const buildTree = (tree,dep) => {
    //     for (let k in  tree) {
    //         const project = new Project();
    //
    //
    //         let moduleName = k.replace(/^([a-z])/g, function (v, b) {
    //             return b.toUpperCase()
    //         }).replace(/\.(.)/g, function (v, b) {
    //             return b.toUpperCase()
    //         }).replace(/_(.)/g, function (v, b) {
    //             return b.toUpperCase()
    //         });
    //         parser(moduleName, k, project,dep);
    //         console.log(Object.keys(dep));
    //         buildTree(tree[k].ref.child,Object.assign({},dep));
    //         project.save();
    //     }
    // }
    //
    //  buildTree(makeTree(dir),{});


    const searchDep = (node, includes, imports) => {
        if (node.name == 'xs:include') {
            includes[node.attributes.schemaLocation] = {
                schemaLocation: node.attributes.schemaLocation
            };
        }

        if (node.name == 'xs:import') {
            imports[node.attributes.schemaLocation] = {
                schemaLocation: node.attributes.schemaLocation,
                namespace: node.attributes.namespace
            };
        }
        for (let _node  of  node.children) {
            searchDep(_node, includes, imports);
        }

    }


    let nfeXsd = fs.readdirSync(dir, 'utf8');
    let files = {};

    const project = new Project(dirOut);
    const mmmb = (ff, _deps) => {
        if (!files[ff]) {
            let xsd = fs.readFileSync(ff, 'utf8');
            let objXsd = parse(xsd);
            let s ={};
            searchDep(objXsd.root, s, s);
            for (let dd in s) {
                let ddd = path.resolve(dir, dd);
                let deps = {};
                mmmb(ddd, deps);

                for (let k in deps){
                    _deps[k] = deps[k]
                }
            }
            let moduleName = path.basename(ff).replace(/^([a-z])/g, function (v, b) {
                return b.toUpperCase()
            }).replace(/\.(.)/g, function (v, b) {
                return b.toUpperCase()
            }).replace(/_(.)/g, function (v, b) {
                return b.toUpperCase()
            });
            parser(moduleName, objXsd, project, _deps);
            files[ff] = _deps;
        } else {
            for (let k in files[ff]){
                _deps[k] = files[ff][k]
            }
        }

    }

    for (let f of nfeXsd) {
        let ff = path.resolve(dir, f);
        mmmb(ff, {});
    }
    printTypeScript.fromProject(project)


}

let p = new JsParser('./schemas/NFe', '../reactjs/src/model/NFe');


// const  Project =require("ts-simple-ast").default;
// const project = new Project();
// const myClassFile = project.createSourceFile("src/MyClass.ts", "export class MyClass {}");
// project.save();