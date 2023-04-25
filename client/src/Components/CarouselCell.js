
import React, { useState, useEffect } from 'react';

export default function CarouselCell() {
    // const manga = fetch('http://localhost:5000/').then(Response => Response.json().then(data => {console.log(data);}
    //let manga = fetch('http://localhost:5000/').then(Response => {return Response.json();}).then(data => {console.log(data)})
    // const manga = fetch('http://localhost:5000/manga')
    // console.log(manga)

    const [manga, setManga] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/manga');
            const data = await response.json();
            setManga(data.mangas);
        }
        fetchData();
    }, []);

    return (
        // <div>
        //     {/* <div className="carousel-cell" style={{ backgroundImage: {element.coverLink} }}>
        //         <a href={element.id}>{element.title}</a>
        //     </div> */}
        // </div>
        <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
            {manga.map((element) => (
                <div
                    className="carousel-cell"
                    style={{ backgroundImage: `url(${element.coverLink})`, width: "100px", height: "180px", backgroundSize: "cover", margin: "40px" }}
                    key={element.id}
                >
                    <a href={"/manga/" + element.id}>{element.title}</a>
                </div>
            ))}
        </div>
    )
}
