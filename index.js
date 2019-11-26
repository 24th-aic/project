const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

mongoose.connect("mongodb+srv://Aldrin_24:@RinRin12@cluster0-9hk0x.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser: true});



const Report = mongoose.model('report',{
    username: String,
    game: String,
    report: String,
    status:String,
    datereported:Date,
	solution:String,
    datesolved:Date
});


app.use(express.static(__dirname + '/dist/gaming'));

app.get('/',(req,res)=>{
	res.sendFile(__dirname + 'dist/gaming/index.hmtl');
});


//get all the report documents
app.get('/report',(req,res)=> {
    Report.find({},(err,data)=>{
        if(err)throw err;
        res.json(data);
    });
});

//add new report
app.post('/report',urlEncoded,(req,res)=>{
    var report= new Report({
        username:req.body.username,
        game:req.body.game,
        report:req.body.report,
        status:req.body.status,
        datereported:req.body.datereported,
        solution:req.body.solution,
        datesolved:req.body.solution
        
    });
    report.save((err)=>{
        if(err)res.json({msg:'Invalid Request'})
        res.json({msg:'Record Saved!'})
    });
});

//update report
app.put('/report/:id',urlEncoded,(req,res)=>{
    Report.updateOne({_id:req.params.id},{
        username:req.body.username,
        game:req.body.game,
        report:req.body.report,
        status:req.body.status,
        datereported:req.body.datereported,
        solution:req.body.solution,
        datesolved:req.body.datesolved
    },(err)=>{
        if(err)res.json({msg:'Invalid Request!'});
        res.json({msg:'Record Updated!'});
    });
});

//delete report
app.delete('/report/:id',(req,res)=>{
    Report.deleteOne({_id:req.params.id},(err)=>{
        if(err)res.json({msg:'Invalid Request!'});
        res.json({msg:'Record Deleted'});
    })
});


const PORT = process.env.PORT || 81;

app.listen(PORT,()=>{
	console.log(`Server running at port ${PORT}`);
});