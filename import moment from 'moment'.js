import moment from 'moment'
let promotional_period_end_date = moment(promotinalDate).format("MM/DD/YYYY")
  let pDay = moment(promotional_period_end_date).format("MM")
  let pMonth = moment(promotional_period_end_date).format("DD")
  let pYear = moment(promotional_period_end_date).format("YYYY")
  let promotionDate = pMonth+"/"+pDay+"/"+pYear
  console.log(promotionDate)
  let promotionalMoment = moment(promotionDate);
  console.log(promotionalMoment)
  let today = moment(new Date()).format('MM/DD/YYYY');
  console.log(today)
  let todayMoment = moment(today);
  let diff1 = promotionalMoment.diff(todayMoment, 'days');
  console.log("call",diff1)
  
  if (diff1 > 0) {
    console.log("if")
  } else {
    console.log("else")
  }