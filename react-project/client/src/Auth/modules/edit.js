import React from 'react';

const Edit = (props) => {

    return (
          <div id={props.id + 100} className="modal" data-objectid="">
            <div className="modal-content">
                <span onClick={() => props.editModal(props.id)} className="close">&times;</span>
                <form className="form select-form" href="about:blank" name="big-form" onSubmit={()=>props.editItem(props.id)} > 
                    <div className="form__left">
                        <div>
                            <label htmlFor="name">Title</label>
                            <input onChange={() => props.updateChange(props.id)} defaultValue={props.name} type="text" name="title" id={`edit-title${props.id}`} />
                        </div>
                        <div>
                            <label htmlFor="url">Image Url</label>
                            <input onChange={() => props.updateChange(props.id)} defaultValue={props.url} type="text" name="url" id={`edit-url${props.id}`} />
                        </div>
                        <div>
                            <label className="title" htmlFor="description">Description</label>
                            <textarea onChange={() => props.updateChange(props.id)} defaultValue={props.description} className="text-area" name="description" id={`edit-description${props.id}`} rows="5" cols="40"></textarea>
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input onChange={() => props.updateChange(props.id)} defaultValue={props.price} type="text" name="price" id={`edit-price${props.id}`} />
                        </div>
                        <div>
                            <label>Landscape type:
                            <select onChange={() => props.updateChange(props.id)} id={`edit-landscapeType${props.id}`} name="landscapeType" >
                                <option value="null">Select an option:</option>
                                <option value="beach" selected={(props.area === 'beach') ? "selected" : null} >Beach</option>
                                <option value="mountain" selected={(props.area === 'mountain') ? "selected" : null} >Mountains</option>
                                <option value="lake" selected={(props.area === 'lake') ? "selected" : null} >Lake</option>
                            </select>
                            </label>
                            <label>Length of trip:
                            <select onChange={() => props.updateChange(props.id)} id={`edit-days${props.id}`} name="days">
                                <option value="null">Select an option:</option>
                                <option value="2day" selected={(props.days === '2day') ? "selected" : null}>2 Day</option>
                                <option value="3day" selected={(props.days === '3day') ? "selected" : null}>3 Day</option>
                                <option value="week" selected={(props.days === 'week') ? "selected" : null}>Week</option>
                            </select>
                            </label>
                        </div>
                        <input type="submit" value="submit" />
                    </div> 
                </form>
            </div>
          </div>
    );
  }

export default Edit;