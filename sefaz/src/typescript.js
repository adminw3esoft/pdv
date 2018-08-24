const xsd = require('./xsd');
const fs = require('fs');
const path = require('path');
let file = fs.openSync("./../../typescript.ts", 'w+');

const getSimpleTypeRef = (refs, type) => {

    for (let j1 in refs) {
        for (let j2 in refs[j1]) {
            if (j2 == type && refs[j1][j2] == 'SIMPLETYPE') {
                return {
                    namespace: j1,
                    name: j2
                }
            }
        }
    }

}


xsd.build((k, xsd) => {
    let basename = path.basename(k).replace(/\./gi, "_");
    let refs = {};
    refs[basename] = {};
    const buildRef = (xml) => {
        if (xml.name == 'xs:schema') {
        } else if (xml.name == 'xs:simpleType') {
            if (xml.attributes.name) {

                refs[basename][xml.attributes.name] = "SIMPLETYPE"
            }
        }
        for (let c in xml.children) {
            buildRef(xml.children[c])
        }
    };
    buildRef(xsd.xml, {indentation: ''});
    return refs
}, (k, xsd, refs) => {
    const buildAstChild = (buildAst ,xml, parent, config) => {
        let str = "";
        for (let c in xml.children) {
            str += buildAst(xml.children[c], {parent: parent, item: xml}, config)
        }
        return str;
    }
    const buildAstSimpleType=({bodyOnly , indentation , name})=>{
        let str =""
        if (!bodyOnly) {
            str += (indentation + 'export const ' + name + '=(value)=>{\n')
        }
        if (!bodyOnly) {
            str += (indentation + '}\n');
        }
        return str;
    }
    const buildAstChoice = (xml, parent, {indentation,name}) => {
        let str="";
        str += (indentation + 'interface _' + name + '');
        str +=buildAstChild((xml, parent, config)=>{
            let  str="";
            str += '{\n';
            str += (indentation + '}\n')
            return str
        },xml, parent,{indentation:indentation+'\t',mode:'class',name})
        str += (indentation + 'namespace _' + name + '{\n')
        str +=buildAstChild(buildAst,xml, parent,{indentation:indentation+'\t',mode:'namespace',name})
        str += (indentation + '}\n')
        str += (indentation + 'export type ' + name + '= _' + name + ';\n')
        return str;
    }

    const buildAstClass = (xml, parent, {indentation,name}) => {
        let str="";
        str += (indentation + 'interface _' + name + '');
        let bb =buildAstChild(buildAst,xml, parent,{indentation:indentation+'\t',mode:'extends',name});
        if ( bb.trim().length >0 ){
            str += ' extends '+bb;
        }
        str += '{\n';
        str +=buildAstChild(buildAst,xml, parent,{indentation:indentation+'\t',mode:'class',name})
        str += (indentation + '}\n')
        str += (indentation + 'namespace _' + name + '{\n')
        str +=buildAstChild(buildAst,xml, parent,{indentation:indentation+'\t',mode:'namespace',name})
        str += (indentation + '}\n')
        str += (indentation + 'export type ' + name + '= _' + name + ';\n')
        return str;
    }

    const buildAst = (xml, parent, config) => {
        let str = "";
        let   {indentation,name,mode} =config;


        let c1 = mode!=='extends' && mode!=='namespace' ;


        if (xml.name == 'xs:schema') {
            let basename = path.basename(k).replace(/\./gi, "_");
            str += (indentation + 'namespace ' + basename + '{\n');
            for (let j1 in refs) {
                for (let j2 in refs[j1]) {
                    str += (indentation + '\timport ' + j1 + '_' + j2 + ' = ' + j1 + '.' + j2 + ';\n');

                }
            }
            str += buildAstChild(buildAst,xml, parent, {indentation: indentation + '\t'});
            str += (indentation + '}\n');

        } else if (xml.name == 'xs:simpleType'&& c1) {
            str +=   buildAstSimpleType({bodyOnly:false,indentation, name:xml.attributes.name});
        } else if (xml.name == 'xs:annotation'&& c1) {
            str += buildAstChild(buildAst ,xml, parent, {indentation: indentation,});
        } else if (xml.name == 'xs:documentation'&& c1) {
            let doc = indentation + '\t' + (xml.content || "").replace(/\n/g, function (d) {
                return d + '\t' + indentation;
            });
            doc = indentation + '/*\n' + doc + '\n' + indentation + '*/' + '\n'
            str += (doc)
        }else if (xml.name == 'xs:complexType' ) {
            str +=buildAstClass(xml, parent,Object.assign({},config,{name:xml.attributes.name||name}))
        }else if (xml.name == 'xs:sequence' && mode=='namespace'){
            str += buildAstClass(xml, parent,Object.assign({},config,{name:(xml.attributes.name||name)+"Sequence"}))
        }else if (xml.name == 'xs:sequence' && mode=='extends'){
            name =(xml.attributes.name||name);
            str += '\t _'+name+"."+name+"Sequence "
        }else if (xml.name == 'xs:choice' && mode=='namespace'){
            str += buildAstChoice(xml, parent,Object.assign({},config,{name:(xml.attributes.name||name)+"Choice"}))
        }else if (xml.name == 'xs:choice' && mode=='extends'){
            name =(xml.attributes.name||name);
            str += '\t _'+name+"."+name+"Choice"
        }else if (xml.name == 'xs:attribute' && mode=='class'){
            // name =(xml.attributes.name||name);
            // str += indentation +'public attribute:_'+name+"."+name+"Attribute;\n"
        }else {
            console.log(xml.name)
        }
        return str;
    };
    let s = buildAst(xsd.xml, null, {indentation: ''});
    fs.writeSync(file, s)
});