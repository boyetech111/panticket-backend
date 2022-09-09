import Category from "../models/category.model";

export async function createCategory(req, res) {
    try {
        const newCategory = await Category.create(req.body);
        return res.status(201).json({
        message: 'Organizer created successfully',
        Category: newCategory,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
        message: 'Issues processing your request',
    });
  }
}
export function deleteCategory(req, res) {
  Category.findByIdAndDelete(req.params.id, (err, category)=>{
    if(err) {
     console.log(err);
     return res.status(500).json({
       message: 'unable to delete category',
     });
    } else {
     return res.status(200).json({
       message: 'event category',
       category,
     });
    }
   })
}
export function updateCategory(req, res) {
  Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: 'after',
    },
    function(err, category) {
      if (err) {
        return res.status(500).json({
          message: 'unable to update cateogry',
        });
      } else {
        return res.status(200).json({
          message: 'category updated',
          category,
        });
       }
    }
  );
}
export function fetchCategory(req, res) {
  Category.find({}, function (err, category) {
    if (err) {
      return res.status(500).json({
        message: 'unable to fetch category ',
      });
    } else {
      return res.status(200).json({
        message: 'category fetched',
        category,
      });
    }
  });
}

export function fetchCategoryById(req, res) {
  Category.findById( req.params.id, function(err, category) {
    if (err) {
      return res.status(500).json({
        message: 'unable to fetch by category',
      });
    } else {
      return res.status(200).json({
        message: 'category fetched',
        category,
      });
     }
  }
);
}