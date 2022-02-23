const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const fs=require('fs');
const PORT = 8091;
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// app.get("/", (req, res) =>{
//     return res.json({test:"hello"})
// })

app.post("/data", async( req, res) =>{
    try{

        const { startDate, endDate, timeUnit, device, gender, keywordGroups, ages } = req.body;
        console.log(req.body);
        const request_body = {
            startDate: startDate,
            endDate:endDate,
            timeUnit: timeUnit,
            keywordGroups : keywordGroups,
            device: device === "all"? "": device,
            gender: gender === "all"? "": gender,

            // 가데이터 넣어보장 아직 프엔 안됐으니까
            // startDate : "2017-10-01",
            // endDate:"2020-10-30",
            // timeUnit: "month",
            // keywordGroups: [
            //     {groupName: "iPhone_4",keywords: ["아이폰4", "iPhone4"]},
            //     {groupName: "iPhone_5",keywords: ["아이폰5", "iPhone5", "iphone5se"]},
            //     {groupName: "iPhone_6",keywords: ["아이폰6", "iPhone6"]}
            // ]
        };
        const url = "https://openapi.naver.com/v1/datalab/search";

        const headers = {
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': process.env.CLIENT_ID,
            'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
        };

        const result = await axios.post(url, request_body, {
            headers:headers
        });

        console.log(result.data);

        //데이터 일일 허용량이 1000번밖에 없어서fs를 사용할거임
        fs.writeFile(`./uploads/chart.json`, JSON.stringify(result.data['results']), function(err) {
            console.log(err)
        })

        return res.json(result.data)

    }
    catch(err){
        console.log(err);
        return res.json(err)
    }
})

app.get("/data", async(req, res) => {
    try{
        res.set("Content-Type", "application/json; charset=utf-8");
        const tempFile = fs.createReadStream('uploads/chart.json');
        return tempFile.pipe(res);
    }
    catch(err){
        console.log(err)
    }
})

app.delete("/data", (req, res) => {
    fs.unlink('uploads/chart.json', function(err){
        if(err){
            console.log(err);
            return res.json("Fail");
        }
    })
    return res.json("OK");
})

app.listen(PORT, () => console.log(`이 서버는 ${PORT}로 동작합니다.`))