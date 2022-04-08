const mongoose = require('mongoose')
const user = require('../model/empSchema.js')

const createEmployee = async(req, res, next)=>{
  try{
    console.log(req.body);
    const {name, email, age, mobile, address, work, description} = req.body;

    // console.log(mobile, mobile.toString().length);

    if(!name || !email || !age || !mobile || !address || !work || !description){
      res.status(404).send("Please fill the data");
    }
    // res.json('data will be stored')
  
    const preEmp = await user.findOne({email:email})

    if(preEmp){
      res.status(404).send('employee already exist');
      return;
    }

    const data = new user({
      name, email, age, mobile, address, work, description
    })
  
    const savedata = await data.save();
    console.log('Saving data of new empoyee', savedata);

    if(savedata){
      // res.json('data saved')
      res.json('data stored')
      res.status(201).json(savedata)
      return;
    }

  }catch(error){
    console.log('Error occurred while creating employee',error);
  }
}

const getEmployee =async(req, res, next)=>{
  try{
    const getemp = await user.find()
    res.json(getemp)
  }catch(error){
    res.json('error while getting data',error)
  }
}

const getByEmployeeId = async(req, res, next)=> {
  try{
    const getting = await user.findById(req.params.id);
    res.status(200).json(getting)
    if(getting){
      res.json('data may delete')
    }
  }catch(err){
    res.json('error while getting emp by ID may be it is deleted...')
    console.log('data notget', err);
  }
}

const updateEmpData = async(req, res, next)=> {
  // console.log(req.params.id);
  let emp = req.body;
  const editData = new user(emp);

  try{
    await user.updateOne({_id: req.params.id}, editData);
    res.status(201).json(editData)
  }catch(e){
    res.status(409).json({msg: e.msg})
  }
}  

const dateteEmployee = async(req, res, next)=>{
  try{
    await user.deleteOne({_id:req.params.id})
    res.json({message:'Data has been deleted successfully'})
  }catch(error){
    res.json(error)
  }
}

exports.getEmployee = getEmployee;
exports.createEmployee = createEmployee;
exports.getByEmployeeId = getByEmployeeId;
exports.updateEmpData = updateEmpData;
exports.dateteEmployee = dateteEmployee;