import React from "react";
import Footer from "../componant/Footer";
import Header from "../componant/Header";
const Apropos = () => {

    return (
        <>
            <Header />
            <div className="bg-image2">
                <div><h1 className="text-center pt-5">ENVAST</h1>Envast est une entreprise regroupant des talents expérimentés et créatifs prêts à relever les défis.
                    Nous créons des produits numériques innovants en mélangeant les nouvelles technologies avec un design créatif. Nous pouvons vous fournir la meilleure qualité à des prix raisonnables, nous développons :
                    -Jeux vidéos
                    -Application mobile
                    - Applications de réalité augmentée
                    -Applications de réalité virtuelle
                    - Sites de commerce électronique
                </div>
            </div>
            <Footer/>
        </>

    )
}
export default Apropos;