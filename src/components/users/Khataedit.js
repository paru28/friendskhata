import React from 'react'

export default  function Khataedit () 
{
  return (

    <main id="main">
    <form>
    <div class="row mb-3">
    <label for="inputEmail3" class="form-label">khata_name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="inputEmail3" class="form-label">khata_id</label>
      <div class="col-sm-10">
        <input type="number" class="form-control"/>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="form-label">contact_no</label>
      <div class="col-sm-10">
        <input type="number" class="form-control"/>
      </div>

      <div class="row mb-3">
      <label for="inputPassword3" class="form-label">member_id</label>
      <div class="col-sm-10">
        <input type="text" class="form-control"/>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </main>
  )
}
