import "./build-page.scss";

import CardWrapper from "../../components/cards-wrapper/cards-wrapper"
import DeckWrapper from "../../components/deck/deck-wrapper/deck-wrapper";

const BuildPage = () => {
 
 return (
   <div className="build_page">
     <CardWrapper settings={{links: false}}/>
     <DeckWrapper/>
     
   </div>
 );
};

export default BuildPage;