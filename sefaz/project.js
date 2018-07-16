const Kind = {
    PROPERTY_DECLARATION: 1,
    IMPORT_DECLARATION: 2,
    SOURCE: 3,
    PROJECT: 4,
    FUNCTION_DECLARATION: 5,
    SET_ACCESSOR_DECLARATION: 6,
    GET_ACCESSOR_DECLARATION: 7,
    CLASS_DECLARATION: 8,
    JS_DOC: 10,
    STATEMENT: 11,
    NAMESPACE_DECLARATION: 12,
}


const JsDoc = function (config) {
    this.getKind = function () {
        return Kind.JS_DOC;
    }
}
const SetAccessorDeclaration = function (c,parent) {
    let me = this;
    this.addJsDoc = function (t) {
        return new JsDoc(t, me);
    }
    this.getName = function () {
        return c.name;
    }
    this.getParent = function () {
        return parent;
    }

    this.getParameters = function () {
        return c.parameters;
    }

    this.getKind = function () {
        return Kind.SET_ACCESSOR_DECLARATION;
    }
    this.setBodyText = function (bodyText) {
        c.bodyText = bodyText;
    }
    this.getBodyText = function () {
       return c.bodyText;
    }
}
const GetAccessorDeclaration = function (c,parent) {
    let me = this;
    this.addJsDoc = function (t) {
        return new JsDoc(t, me);
    }

    this.getParameters = function () {
        return c.parameters;
    }


    this.setReturnType = function(returnType){

         c.returnType=returnType;
    }

    this.getParent = function () {
        return parent;
    }
    this.getName = function () {
        return c.name;
    }
    this.getKind = function () {
        return Kind.GET_ACCESSOR_DECLARATION;
    }
    this.getBodyText = function () {
        return c.bodyText;
    }
}
const PropertyDeclaration = function (c,parent) {
    let me = this;

    let getAccessor , setAccessor , imports;

    if (c.getAccessor)
     getAccessor =new GetAccessorDeclaration(c.getAccessor);
    if (c.setAccessor)
     setAccessor=new SetAccessorDeclaration(c.setAccessor);
    if (c.imports){
        imports =c.imports
    }

    this.getParent = function (t) {
        return parent
    }

    this.getImports = function () {
        return imports;
    }
    this.getGetAccessor = function () {
        return getAccessor;
    }

    this.getSetAccessor = function () {
        return setAccessor;
    }


    this.getName = function () {
        return c.name;
    }

    this.getParameters = function () {
        return c.parameters;
    }

    this.addJsDoc = function (t) {
        return new JsDoc(t, me);
    }
    this.getKind = function () {
        return Kind.PROPERTY_DECLARATION;
    }
}
const ClassDeclaration = function (config, parent) {
    let me = this;
    let statements =[];
    this.addJsDoc = function (t) {
        return new JsDoc(t, me);
    }
    this.getParent = function (t) {
        return parent
    }
    this.getStatements = function (v) {
        return statements;
    }
    this.getName = function () {
        return config.name;
    }
    this.isExported = function () {
        return config.isExported;
    }
    this.addGetAccessor = function (v) {
        let statement = new GetAccessorDeclaration(v, me);
        statements.push(statement);
        return statement;

    }
    this.addProperty = function (v) {
        let statement = new PropertyDeclaration(v, me);
        statements.push(statement);
        return statement;

    }
    this.getKind = function () {
        return Kind.CLASS_DECLARATION;
    }
}
const FunctionDeclaration = function (c, parent) {
    this.isExported = function () {
        return c.isExported;
    }
    this.getName = function () {
        return c.name;
    }
    this.getParent = function () {
        return parent;

    }
    this.addJsDoc = function () {

    }

    this.getParameters = function () {
        return c.parameters;
    }

    this.setBodyText = function (bodyText) {
        c.bodyText = bodyText;
    }
    this.getBodyText = function () {
        return c.bodyText;
    }


    this.getKind = function () {
        return Kind.FUNCTION_DECLARATION;
    }
}


const ImportDeclaration = function (c) {
    this.getKind = function () {
        return Kind.IMPORT_DECLARATION;
    }
    this.getNamedImports = function () {
        return c.namedImports;
    }
    this.getName = function () {
        return c.name;
    }
    this.getModuleSpecifier = function () {
        return c.moduleSpecifier;
    }

    this.addJsDoc = function () {

    }
}
const Statement = function (value) {
    let me = this;
    this.getKind = function () {
        return Kind.STATEMENT;
    }
    this.addJsDoc = function () {

    }
    this.getValue = function () {
        return value;
    }
}


const Source = function (fileSource, parent) {
    let me = this;
    let statements = [];
    this.getFileSource = function () {
        return fileSource;
    }
    this.addStatements = function (v) {
        let statement = new Statement(v, me);
        statements.push(statement);
        return statement;
    }
    this.getStatements = function (v) {
        return statements;
    }
    this.addImportDeclaration = function (v) {
        let statement = new ImportDeclaration(v, me);
        statements.unshift(statement);
        return statement;
    }
    this.addFunction = function (v) {
        let statement = new FunctionDeclaration(v, me);
        statements.push(statement);
        return statement;
    }
    this.addClass = function (v) {
        let statement = new ClassDeclaration(v, me);
        statements.push(statement);
        return statement;
    };
    this.getKind = function () {
        return Kind.SOURCE;
    }
    this.addJsDoc = function (v) {
        let statement = new JsDoc(v);
        statements.push(statement);
    }
}

const Project = function (dirOut) {
    const me = this;
    let sources = [];
    this.createSourceFile = function (v) {
        let source = new Source(v, me);
        sources.push(source);
        return source;
    }
    this.getSources = function () {
        return sources;
    }
    this.getDirOut = function () {
        return dirOut;
    }


    this.getKind = function () {

        return Kind.PROJECT;
    }

    this.addJsDoc = function () {

    }

}


const TypeGuards = function () {
    this.isSourceFile = function (v) {
        return v.getKind() == Kind.SOURCE;
    }

    this.isImportDeclaration = function (v) {
        return v.getKind() == Kind.IMPORT_DECLARATION;
    }

    this.isPropertyDeclaration = function (v) {
        return v.getKind() == Kind.PROPERTY_DECLARATION;
    }


    this.isStatement = function (v) {
        return v.getKind() == Kind.STATEMENT;
    }
    this.isFunctionDeclaration = function (v) {
        return v.getKind() == Kind.FUNCTION_DECLARATION;
    }
    this.isClassDeclaration = function (v) {
        return v.getKind() == Kind.CLASS_DECLARATION;
    }

    this.isSetAccessorDeclaration = function (v) {
        return v.getKind() == Kind.SET_ACCESSOR_DECLARATION;
    }
    this.isGetAccessorDeclaration = function (v) {
        return v.getKind() == Kind.GET_ACCESSOR_DECLARATION;
    }

    this.isNamespaceDeclaration = function (v) {
        return v.getKind() == Kind.NAMESPACE_DECLARATION;
    }
}


module.exports = {
    Project: Project,
    TypeGuards: new TypeGuards()
}