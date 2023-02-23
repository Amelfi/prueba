const speedLimit= 85;
let dataSpeedLimit=[];
let dataSaved=[];
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido)
// let info = {};

const showLocation = (req, res)=>{
  console.log(req.body.data[0])
    const {ficha, lat, long, speed} = req.body.data[0];

   if(!ficha || !lat || !long || !speed){
    res.json({warning: 'Please complete all fields'})
   }
 
  //  info={
  //   ficha,
  //   lat,
  //   long,
  //   speed
  //  }
    
    if(speedLimit > speed){
      res.json(req.body.data[0])
    }

    const newData={
      speed,
      date: hoy.toLocaleString()
    }

    dataSpeedLimit=[...dataSpeedLimit, newData]
    const data={
      message: 'Velocidad limite exedida',
      ficha,
      lat,
      long,
      speed
    }
    res.json(data)

}

const showSpeedLimit = (req, res)=>{
    res.json(dataSpeedLimit)
    
}
// const showSpeedLimit = (req, res)=>{
//     res.json(dataSpeedLimit)
// }

module.exports={ showLocation, showSpeedLimit}