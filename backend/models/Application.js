const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        job: { type: mongoose.Schema.Types.ObjectId, ref: "job", required: true },
        application: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            resume: { tupe: String }, // can store uploade version or link
            stauts: {
                type: String,
                enum: ["Applied", "In Review", "Rejected", "Accepted"],
                default: " Appplied",
              },
         },
            { timestamps: true }         
);

module.exports = mongoose.model("Application", applicationSchema);

