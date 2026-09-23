const Header =(props)=>{
    console.log('props',props)
return(
<>
<h1>{props.heading_text} - {props.name} - {props.age}</h1>
</>
)

}
export default Header;