export default function Advertisement() {
    
    const imgStyle = {
        width: '100%',
        height: '430px',
        position:'relative',
        top: '40px'
    }
  
    return (
    <div>
      <img style={imgStyle}
        src="https://images.livemint.com/img/2022/08/02/1600x900/resize_1659439329441_1659439336278_1659439336278.jpg"
        alt="ads"
      />
    </div>
  );
}
