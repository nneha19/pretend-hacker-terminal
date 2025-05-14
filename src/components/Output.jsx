
function Output({history}) {


  return (
    <div className='mb-4 space-y-1' style={{ fontFamily: 'Courier New, monospace', whiteSpace: 'pre-wrap' }}>
        {
            history.map((line,index)=>{
                return <div key={index}>{line} </div>
            })
        }
    </div>
  )
}

export default Output