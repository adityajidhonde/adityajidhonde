var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var compiler = require('compilex');

var option = {stats : true};
compiler.init(option);

app.use(express.json({extended:false})); 

app.post('/compile', (req, res) => {
    console.log(req.body);
        compiler.flush(function(){
		console.log('All temporary files flushed !'); 
	});
	var code = req.body.code;	
	var input = req.body.input;
	var lang = req.body.lang;
	if(lang == "cpp" || lang == undefined){  
	var envData = { OS : "windows" , cmd : "g++",options: {timeout:20000 } };
	if(input==""){
		compiler.compileCPP(envData , code , function (data) {
			if(data.error)
			{
				ert=data.error;    		
			}
			else
			{
				ert=data.output;
			}
			res.send(ert);
		});
	}else{	   	
    compiler.compileCPPWithInput(envData , code ,input , function (data) {
        		if(data.error)
        		{
        			ert=data.error;    		
        		}
        		else
        		{
        			ert=data.output;
        		}
                res.send(ert);
        	});
		}
	}
	else if(lang == "java"){  
		var envData = { OS : "windows"}; 
		if(input==""){
			compiler.compileJava( envData , code , function(data){
				if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
			});

		}else{	   	
		compiler.compileJavaWithInput(envData , code ,input , function (data) {
					if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
				});
			}
		}else if(lang == "python"){
			var envData = { OS : "windows"}; 
		if(input==""){
			compiler.compilePython( envData , code , function(data){
				if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
			});

		}else{	   	
		compiler.compilePythonWithInput(envData , code ,input , function (data) {
					if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
				});
			}
		}
		else if(lang == "csharp"){
			var envData = { OS : "windows"}; 
		if(input==""){
			compiler.compileCS( envData , code , function(data){
				if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
			});

		}else{	   	
		compiler.compileCSWithInput(envData , code ,input , function (data) {
					if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
				});
			}
		}
		else if(lang == "vbscript"){
			var envData = { OS : "windows"}; 
		if(input==""){
			compiler.compileVB( envData , code , function(data){
				if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
			});

		}else{	   	
		compiler.compileVBWithInput(envData , code ,input , function (data) {
					if(data.error)
					{
						ert=data.error;    		
					}
					else
					{
						ert=data.output;
					}
					res.send(ert);
				});
			}
		}
} );

app.listen(3001);