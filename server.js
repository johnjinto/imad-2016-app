var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
//var articles ={
    
var articleone = {
    
    title: 'article-one',
    heading: 'article-one',
    date: '05 Sept',
    content: `
    <p>
                This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!
            </p>
            <p>
                This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!
            </p>
            <p>
                This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!    This is the content for first article... nice!
            </p>`
};

var articletwo = {
    
    title: 'article-two',
    heading: 'article-two',
    date: '10 Sept',
    content: `
    <p>
    
    Content for artile 2
    
             </p>`
};

var articlethree = {
    
     title: 'article-three',
    heading: 'article-three',
    date: '15 Sept',
    content: `
    <p>
    
    Content for artile 3
    
             </p>`
};

//};
function createTemplate (data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    
    <body>
        <div class=container>
            <div>
                <a href="/">Home</a>
            </div>
         <hr/>       
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            
            <div>
              ${content}
            </div>
            
        </div>    
    </body>
</html>

`;

    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));


});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
     
   console.log(articleName);
   console.log(typeof(articleName));
  //res.send(createTemplate(articleone));
  res.send(createTemplate(articleName));



});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));

});

app.get('/ui/santa.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'santa.png'));
});
app.get('/ui/cap.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cap.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
