class apiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }


    pagination(itemsInAPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skipItems = itemsInAPage * (currentPage - 1);
      
        this.query = this.query.skip(skipItems).limit(itemsInAPage);
        return this;
      }
      
      
}

export default apiFeatures;