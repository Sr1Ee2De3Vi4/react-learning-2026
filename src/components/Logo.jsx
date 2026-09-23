const Logo=(props) =>{
    console.log('props',props)

    return (
        <>
<img className="logo-img" src={props.logo} alt="err img" />

        </>
    )

}
export default Logo;