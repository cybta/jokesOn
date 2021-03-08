import React from 'react'
import ksajokes from '../data/ksajokes'
import {Link} from "react-router-dom"
import useClipboard from "react-use-clipboard"

const KSAScreen = ({ match }) => {
    const myjoke = ksajokes.find(j => j._id === match.params.id );
    const [isCopied, setCopied] = useClipboard(`${myjoke.joke}`, {
        successDuration: 1000,
    });

    const title = `${myjoke.joke}`
    const url = window.document.location.href;
      
    function shareMe(){
        if(navigator.share){
            navigator.share({
                title: `${title}`,
                url: `${url}`,
            }).then(() => {
                console.log('Thanks for sharing!')
            })
            .catch(console.error);
        }
    }
    return (
        <div>
            <div className="row">
                <Link to="/KSA" className="back-btn">Back</Link>
            </div>
            <div className="jokelist"> 
                <div>{myjoke.joke}</div>
                <button onClick={setCopied}>
                    {isCopied ? "copied" : "copy link"}
                </button>
                <button onClick={shareMe()} className="share">
                    share
                </button>
                <a href={`https://wa.me/?text=${myjoke.joke}`}
                data-action="share/whatsapp/share">
                    Whatsapp
                </a>
            </div>
        </div>
    )
}

export default KSAScreen