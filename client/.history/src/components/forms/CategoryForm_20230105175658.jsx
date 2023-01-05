export default function CategoryForm (
  { value,
    setValue,
    handleSubmit,
    placeholder,
    buttonText = "Submit",
    handleDelete } )
{
  return ( <div className='p-3'>
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        className='form-control p-3'
        placeholder={ placeholder }
        value={ value }
        onChange={ ( e ) => setValue( e.target.value ) }
      />
      <div className='d-flex justify-content-between'>
        <button  onClick={handl} className='btn btn-primary mt-3'>{ buttonText }</button>
        { handleDelete && ( <button className='btn btn-danger mt-3'>Delete</button> )
        }      </div>

    </form>

  </div> );
}