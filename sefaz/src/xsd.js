let fs = require('fs');
let path = require('path');
const parseXml = require('xml-parser');
const load = (dir)=>{
    let obj ={};
    let files = fs.readdirSync( path.resolve('../schemas',dir));
    for ( let file of files){
        let pFile = path.resolve('../schemas',dir,file)
        if (fs.statSync(pFile).isFile()){
            let xml = parseXml(fs.readFileSync(pFile ).toString());
            obj[pFile] ={'xml':xml.root};
        }else {
            obj=Object.assign(obj, load(pFile))
        }
    }
    return obj;
}
const appendDependences = (xsds)=>{
    for ( let k in xsds){
        let deps ={};
        let xsd =  xsds[k];
        const _xml = (xml)=>{
            if (xml.name=='xs:import'||xml.name=='xs:include'){

                let kk =path.resolve(path.dirname(k),xml.attributes.schemaLocation)
                if (xsds[kk]){
                    deps[kk]=xsds[kk];
                }
            }

            if (xml.children&& xml.children.length){
                for (let child of xml.children){
                    _xml(child);
                }
            }

        }
        xsd.deps=deps;
        _xml(xsd.xml)

    }
    return xsds;
}

module.exports = {
    build:(fnRef,fnBuild)=>{
        let xsds =appendDependences(load('../schemas'))
        let _c2={};
        const build = (deps) =>{
            let resultRef ={};
            for (let k in deps){
                let dep = deps[k];
                if (!_c2[k]){
                    let refs =fnRef(k,dep);
                    refs=Object.assign({},refs,build(dep.deps));
                    _c2[k] =refs;
                    fnBuild(k,dep,refs);
                }
                resultRef= Object.assign(resultRef,_c2[k])
            }
            return resultRef;
        }
        build(xsds)
    }
}