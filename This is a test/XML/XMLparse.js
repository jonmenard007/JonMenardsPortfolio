var text;

document.getElementById('inputfile').addEventListener('change', function() { 
              
    var fr=new FileReader(); 
    
    fr.readAsText(this.files[0]); 
   
    fr.onload=function(){ 
        document.getElementById('output').textContent=fr.result;  
        text = fr.result;
       
    

        let parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
        console.log(xmlDoc.getElementsByTagName("Models")[0].childNodes[0].nodeName === "#text");
        //console.log(xmlDoc.getElementsByTagName("Models")[0].childNodes[0]);
        /*
        console.log(xmlDoc.getElementsByTagName("Model")[0].childNodes[0]);
        console.log(xmlDoc.getElementsByTagName("Inputs")[0].childNodes[0]);
        console.log(xmlDoc.getElementsByTagName("Port")[0].childNodes[0]);
        console.log(xmlDoc.getElementsByTagName("Outputs")[0].childNodes[0]);
        console.log(xmlDoc.getElementsByTagName("Files")[0].childNodes[0].getAttribute('name'));
        console.log(xmlDoc.getElementsByTagName("File")[0].childNodes[0]);
        */
        let models = xmlDoc.getElementsByTagName("Models")[0];
        let modelsSize = models.childNodes.length;
        console.log("<Models>");
        for(let i = 0; i < modelsSize; i++){
            let model = models.childNodes[i];
            if(model.nodeName === "#text"){
                continue;
            }
            let modelName = model.getAttribute("name");
            let modelType = model.getAttribute("type");
            let modelDescription = model.getAttribute("description");
            console.log("<Model name ='" + modelName + "' type ='" + modelType + "' description='" + modelDescription + "'/>");

            console.log("<Inputs>");
            let inputs = model.childNodes[0];
             printInputs(inputs);
            console.log("</Inputs>");
            
            console.log("<Outputs>");
            let outputs = model.childNodes[1];
             printOutputs(outputs)
            console.log("</Outputs>"); 
            
            console.log("<Files>");
            let files = model.childNodes[2];
             printFiles(files)
            console.log("</Files>");

            console.log("</Model>");
        } 
        console.log("</Models>");
    }

});


 function printInputs(inputs){
    let inputSize = inputs.childNodes.length;
    for(let k = 0; k < inputSize; k++){
        let port = inputs.childNodes[k];
        if(port.nodeName === "#text"){
            continue;
        }
        let name = port.getAttribute("name");
        let type = port.getAttribute("type");
        let description = port.getAttribute("description");
        let connection = "input"; 
        console.log("<Port name ='" + name + "' type ='" + type + "' description='" + description + "'/>");
    }
    return true
}


 function printOutputs(outputs){
    let outputSize = outputs.childNodes.length;
           
    for(let k = 0; k < outputSize; k++){
        let port = outputs.childNodes[k];
        if(port.nodeName === "#text"){
            continue;
        }
        let name = port.getAttribute("name");
        let type = port.getAttribute("type");
        let description = port.getAttribute("description");
        let connection = "output"; 
        console.log("<Port name ='" + name + "' type ='" + type + "' description='" + description + "'/>");
    }
    return true
}

 function printFiles(files){
    let filesSize = files.childNodes.length;
    for(let k = 0; k < filesSize; k++){
        let file = files.childNodes[k];
        if(file.nodeName === "#text"){
            continue;
        }
        let name = file.getAttribute("name");
        let type = file.getAttribute("type");
        let location = file.getAttribute("location");
        console.log("<File name ='" + name + "' type ='" + type + "' location='" + location + "'/>");
    } 
    return true
}


