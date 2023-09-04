
module.exports = (htmlStr, course) => { //fat arrow or lamda function  
    let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
    output = outout.replace(/{%IMAGE%}/g, course.image);
    output = outout.replace(/{%FROM%}/g, course.from);
    output = outout.replace(/{%INSTRUCTOR%}/g, course.instructor);
    output = outout.replace(/{%CREDITS%}/g, course.credits);
    output = outout.replace(/{%DESCRIPTION%}/g, course.descrption);
    output = outout.replace(/{%ID%}/g, course.id);
    return output;

}