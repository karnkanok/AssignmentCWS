const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.listen(8088);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var curriculums = [],Id = 1 ;

app.get('/api/curriculums' , (req,res) => {
res.send(curriculums);
console.log('Get Curriculums');
});

app.post('/api/curriculums', (req,res) =>{

  var name = req.body.name;
  curriculums.push({
    id:Id++,
    name: name
  });
  res.send(curriculums);
  console.log('New Curriculums : ',name);
});

app.delete('/api/curriculums/:curriculums_id' , (req,res) => {
var id = req.params.curriculums_id,
tmp = [];

curriculums.map(curriculums =>{
if (curriculums.id != id){
tmp.push(curriculums);
}
} );
curriculums = tmp;
res.send(curriculums);
console.log('Delete Curriculums : ' ,id );
});
