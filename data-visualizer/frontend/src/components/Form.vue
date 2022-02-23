<template>
    <el-form ref="form" :model="form" label-width="120px">

        <div class="groups-wrapper">
            <el-form-item style="width: 500px;" label="키워드">
                <el-input v-model="form.keyword">
                    <el-button @click="saveKeyword" slot="append">키워드 추가</el-button>
                </el-input>
            </el-form-item>
            
            <div v-if='keywords' class="tag-wrapper">
                <el-tag @click="removeKeyword(keyword)" v-for="keyword in keywords" :key="keyword" class="group-tag">
                    {{keyword}}
                </el-tag>
            </div>
            
            <el-form-item style="width:500px;" label="주제">
                <el-input v-model=form.groupName></el-input>
            </el-form-item>

            <el-button v-if="keywordGroups" class="tag-wrapper">
                <el-tag @click="removeGroup(group.groupName)" v-for="(group, index) in keywordGroups" :key=index type="success" class="group-tag">
                    {{group.groupName}}
                </el-tag>
            </el-button>

            <el-button @click="saveGroup" class="create-button" type="primary">주제 생성하기</el-button>
        </div>

        {{form.name}}
        
        <div class="groups-wrapper">

            <el-form-item label="시간대별 설정">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.startDate" style="width:100%"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2"></el-col>
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.endDate" style="width:100%"></el-date-picker>
                </el-col>
            </el-form-item>
            
            <el-form-item label="구간 단위">
                <el-radio-group v-model="form.timeUnit">
                <el-radio label="day"></el-radio>
                <el-radio label="week"></el-radio>
                <el-radio label="month"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="디바이스">
                <el-radio-group v-model="form.device">
                <el-radio label="all">ALL</el-radio>
                <el-radio label="pc">PC</el-radio>
                <el-radio label="mo">모바일</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="성별">
                <el-radio-group v-model="form.gender">
                <el-radio label="all">모두</el-radio>
                <el-radio label="m">남</el-radio>
                <el-radio label="f">여</el-radio>
                </el-radio-group>
            </el-form-item>
           
        </div>
    
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import moment from "moment"
import {dataLap} from "../utils/axios"
import {mapActions} from "vuex";

  export default {
    data() {
      return {
        form: {
          name: '',
          startDate: null,
          endDate: null,
          timeUnit: "month",
          device: "all",
          gender: "all",
          keyword:'',
          groupName:'',

        },
        keywordGroups:[],
        keywords:[],
      }
    },
    methods: {
        ...mapActions(["generateChartData"]),
      async onSubmit() {
        // console.log(this.keywordGroups);
        // console.log(this.form.startDate);
        // console.log(this.form.endDate);
        // console.log(this.form.timeUnit);
        // console.log(this.form.device);
        // console.log(this.form.gender);
        const { startDate, endDate, gender, timeUnit, device } = this.form;
        
        const makeDate = (date) => {
            const toCalendarDate = new Date(Date);
            // console.log(toCalendarDate.toDateString(?));
            return `${toCalendarDate.getFullYear()}-${toCalendarDate.getMonth()}-${toCalendarDate.getDate()}`
        }

        if(startDate && endDate && timeUnit && gender && device && this.keywordGroups.length){
            const data = {
                keywordGroups: this.keywordGroups,
                startDate : moment(startDate).format("YYYY-MM-DD"),
                endDate:moment().format("YYYY-MM-DD"),
                timeUnit,
                device,
                gender
            }
            const result = await dataLap.post(data);
            // console.log(result);
            if(result.status === 200){
                console.log("차트를 그려라")
                this.generateChartData();
            }else{
                console.log("빈 값들을 입력하세요")
            }
        }
      },
      saveKeyword(){
        //   console.log("test")
        if(this.form.keyword){
            this.keywords.push(this.form.keyword);
        }
        this.form.keyword="";
        console.log(keywords)
      },
      removeKeyword(keyword){
          this.keywords = this.keywords.filter((el) => el !== keyword)
      },
      removeGroup(groupName){
          this.keywordGroups = this.keywordGroups.filter((el) => el.groupName !== groupName)
      },
      saveGroup(){
          if(this.form.groupName){
            this.keywordGroups.push({
                groupName: this.form.groupName,
                keywords: this.keywords
            });
            }
            this.form.groupName = "";
            this.keyword = [];
        }
    }
  }
</script>

<style>
.groups-wrapper{
    display: flex;
    flex-direction: column;
    border : 1px solid #dddddd;
    padding: 30px;
    margin-bottom: 30px;
    align-items:stretch;
}
.tag-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 12px;
}
.group-tag{
    width:80px;
    font-size: 11px;
    margin:3px;
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
}

.create-button{
    width:31%;
    margin-top: 30px !important;
    margin-left:120px;
}
</style>