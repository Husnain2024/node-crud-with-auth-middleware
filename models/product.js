const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,  
        required: [true, "Price must be provided"]
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {  
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        enum: {
            values: [
                "mi", "dell", "samsung", "apple", 
                "hp", "lenovo", "sony", "lg", "nokia", "huawei"
            ],
            message: `{VALUE} is not supported`, 
        }
    }
});


module.exports = mongoose.model('Product', productSchema);