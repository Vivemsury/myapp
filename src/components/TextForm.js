import React,{useState} from 'react'

export default function TextForm(props) {
    let handleonclick=()=>{
        // console.log("click")
        // setText("you have click")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to upper case","success")
    }


    let handlecopylick=()=>{
        var text=document.getElementById("mybox")
        // aakha text ne select kare copy karva mate
        text.select();
        // clipbord ma nakhe paste karva
        navigator.clipboard.writeText(text.value);
        // select thayelu screen par show na thay tena mate
        document.getSelection().removeAllRanges();
        props.showAlert("copy the text","success")
    }


    let handleonchange=(event)=>{
        // console.log("onchange")
        // console.log(event.target.value)
        setText(event.target.value)
    }

    // const [text,setText]=useState('enter');
    const [text,setText]=useState('');

    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
                id="mybox" rows="8" placeholder='enter your text'></textarea>


                {/* disabled text ni length zero karvathi button band thai jay jya sudhu aema text write na thay tya sudhi */}
                <button disabled={text.length===0} style={{border:"2px solid black"}} className={`btn btn-${props.mode} my-2 mx-1`}onClick={handleonclick}>convert to upper case</button>


                <button disabled={text.length===0} style={{border:"2px solid black"}} className={`btn btn-${props.mode} my-2 mx-1`} onClick={handlecopylick}>Copy text</button>

            </div>
            <div className="container">
                <h1>YOUR SUMMERY</h1>

                {/* count number of words:-split and character:length */}
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>

                <p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>

            </div>
        </div>
        </>
    )
}

