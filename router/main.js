module.exports = function(app,fs)
{
    app.get('/', function(req, res){
        res.render('index',{
            title : "MY HOMEPAGE",
            length : 5
        })
    });

    app.get('/list', function(req, res){
        fs.readFile(__dirname + "/../data/" + "user.json", 'utf8', function(err, data){
            console.log(data);
            res.end(data);
        });
    })

    app.get('/getUser/:username', function(req, res){
        fs.readFile(__dirname + "/../data/user.json", 'utf8',function(err, data){
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
        });
    });

    app.post('/addUser/:username', function(req, res){
        var result = {  };
        var username = req.params.username;

        //CHECK REQ VALIDTY
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid reqest";
            res.json(result);
            return;
        }

        //LOAD DATA $ CHECK DUPLICATION
        fs.readFile(__dirname + "/../data/user.json", 'utf8', function(err, data){
            var users = JSON.parse(data);
            if(users[username]){
                //DUPRICATION FOUND
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }
            //ADD TO DATA
            users[username] = req.body;

            //SAVE DATA
            fs.writeFile(__dirname + "/../data/user.json",
                        JSON.stringify(users, null, '\t'),"utf8", function(err, data){
                            result = {"success":1};
                            res.json(result);
            })

        })
    })
}
//router 코드를 따로 작성했기에, server.js 에서 모둘로서 불러올 수 있도록 사용됨.
//__dirname은 현재 모듈의 위치를 나타냄.
//router 모듈은 router 폴더에 들어있으니, data 폴더에 접근하려면 /../를 앞 부분에 붙여서 먼저 상위폴더로 접근해야합니다.
//파일을 읽은 후, 유저 아이디를 찾아서 출력해줍니다.
//유저를 찾으면 유저 데이터를 출력하고 유저가 없다면 {}을 출력하게 됩니다.
//fs.readFile()로 파일을 읽었을 시엔 텍스트 형태로 읽어지기 때문에, JSON.parse()롤 해야합니다.
// POST addUser
//JSON 형태가 INVALID 하다면 오류를 반환하고, VALID하다면 파일을 열어서 username의 중복성을 확인후
//JSON 데이터에 추가하여 다시 저장합니다.
//stringfy(users, null, 2)은 JSON의 pretty-print를 위함이다.