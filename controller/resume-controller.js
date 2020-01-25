const ResumeModel = require('../model/resume-model');

exports.getData = () => {
    return ResumeModel;
}

exports.getName = () => {
    return ResumeModel.name;
}

exports.getTitle = () => {
    return ResumeModel.title;
}

exports.getProfession = () => {
    return ResumeModel.profession;
}

exports.getDescription = () => {
    return ResumeModel.description;
}

exports.getExperience = () => {
    return ResumeModel.experience;
}

exports.getEducation = () => {
    return ResumeModel.education;
}

exports.getSkills = () => {
    return ResumeModel.skills;
}