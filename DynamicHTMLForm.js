//Button Click

$(document).ready(function() {

	//Generate Button Click Event			
	$("#generateButton").click(function(){
        //Fetching XML from textbox
        var xmlString=$("#textArea").val();
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlString,"text/xml");

        var elements = xmlDoc.getElementsByTagName("form")[0].childNodes; //root tag
        
        

        //creating a JSON Array from the xml data
        var jsonArray=[];
        index=0;

        
        for(var i=0;i<elements.length-2;i=i+2){
        	
        	jsonArray[index]={
        		
        		"name": elements[i+1].tagName,
        		"class": elements[i+1].getAttribute('class'),
        		"value": elements[i+1].innerHTML
        		
        	};

        	
        	index++;

        	
        }

		//Creating the HTML Forms


		for(i=0;i<jsonArray.length;i++){


			if(jsonArray[i].class == 'number'){
				//Not Editable
				$('#form-rows').append(jsonArray[i].name+'<input class="form-control" id='+i+' readonly><br>');
			 //Setting values
			 document.getElementById(i).value=jsonArray[i].value;

			}

			else if(jsonArray[i].class=="href"){

				$('#form-rows').append(jsonArray[i].name+'<a href="'+jsonArray[i].value+'"><input class="form-control" id='+i+'></a><br>');
			 //Setting values
			 document.getElementById(i).value=jsonArray[i].value;

			}

			else if(jsonArray[i].class=='button'){
				$('#form-rows').append('<button type="button" class="btn btn-primary">'+jsonArray[i].value+'</button><br><br>');

			}
			else
			{
				$('#form-rows').append(jsonArray[i].name+'<input class="form-control" id='+i+'><br>');
			 //Setting values
			 document.getElementById(i).value=jsonArray[i].value;

			}
		}

		

		

		
		
		

	}); 
});