export default async function deneme(){
    const data = await getData();
    return(
        <div>
            {data.SELAM}
        </div>
    )
}

async function getData() {
    const res = {SELAM:'DEMNEME'}
  
    return res
  }
  