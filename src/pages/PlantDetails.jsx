import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import PlantDetailsCard from "../components/PlantDetailsCard";

const PlantDetails = () => {

    const data = useLoaderData();

    console.log(data)

    const {id} = useParams();

   // const [plant,setPlant] = useState({});

    const plant = data.find(singlePlant => singlePlant._id == id);

    // useEffect(() => {
        
    //     setPlant(plantDetails);
    // },[data,id])


  return (
    <div>
      <Navbar></Navbar>

        <main className='w-11/12 gap-5 mx-auto '>

                <section className=''>
                    <h2 className='my-3 text-2xl text-center font-bold text-green-500'>Plant Details</h2>
                    {/* <NewsDetailsCard news={news}></NewsDetailsCard> */}
                    <PlantDetailsCard plant={plant}></PlantDetailsCard>
                </section>

                
         </main>

      

      <Footer></Footer>
    </div>
  );
};

export default PlantDetails;


// const data = useLoaderData();

//     const {id} = useParams();

   

//     const [news,setNews] = useState({});

   // console.log(data,id,news);


    //const [thumbnail_url, details] = news;

    // useEffect(()=>{

    //     const newsDetails = data.find(singleNews => singleNews.id == id);
    //     setNews(newsDetails);
    // },[data,id])

    // return (
    //     <div>
    //         <header className='py-3'>
    //             <Header></Header>
    //         </header>

    //         <main className='w-11/12 gap-5 mx-auto grid grid-cols-12'>

    //             <section className='col-span-9'>
    //                 <h2 className='mb-10'>News Details</h2>
    //                 <NewsDetailsCard news={news}></NewsDetailsCard>
    //             </section>

    //             <section className='col-span-3'>
    //                 <RightAside></RightAside>
    //             </section>
    //         </main>


    //     </div>
    // );
