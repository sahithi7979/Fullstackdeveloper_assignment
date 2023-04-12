var mongo=require("mongodb");

var flipkart1={"name":"iphone" ,"cost":80000,"rating":4.6,"color":"green","user":"admin"};
var flipkart2={"name":"camera" ,"cost":60000,"rating":5.0,"color":"black","user":"admin"};
var flipkart3={"name":"shirt" ,"cost":2000,"rating":4.9,"color":"grey","user":"admin"};
var flipkart4={"name":"TV-SONY" ,"cost":100000,"rating":5.0,"color":"black","user":"admin"};
var flipkart5={"name":"Cycle" ,"cost":"20000","rating":4.5,"color":"pink","user":"admin"};

var productsArr=[flipkart1,flipkart2,flipkart3,flipkart4,flipkart5];
async function main(){
    const uri = "mongodb://127.0.0.1:27017/";
     const client = new mongo.MongoClient(uri);
 
    try {
        await client.connect();
 
        console.log('connected');
       await createNews(client,productsArr);


    } catch (e) {
        console.error(e);
    } finally {
        console.log('connection closed');
        await client.close();
    }
}

async function createNews(client,productsArr){
    const result = await client.db("flipkart").collection("products").insertMany(productsArr);
    console.log(`Flipkart products with the following id: ${result.insertedId}`);
   


}
main().catch(console.error);