class apiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                //searches the name only...not price, not description, not rating (as entered in the database). only the NAME.
                district : {
                    //these are mongodb operators
                    $regex: this.queryStr.keyword, //this is basically used to search whether the pattern is present in our database or not
                    $options: "i", //makes our search case insensitive
                },
            }
            : {};

            // console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }


    pagination(itemsInAPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skipItems = itemsInAPage * (currentPage - 1);
      
        this.query = this.query.skip(skipItems).limit(itemsInAPage);
        return this;
      }
      
      
}

export default apiFeatures;