import React from 'react';

const Edit = (props) => {

    return (
          <div id={props.id + 1} className="modal" data-objectid="">
            <div className="modal-content">
                <span onClick={() => props.editModal(props.id)} className="close">&times;</span>
                <form className="form" href="about:blank" name="big-form" onSubmit={()=>props.editItem(props.id)} > 
                    <div className="form__left">
                        <div>
                            <label htmlFor="name">Title</label>
                            <input onChange={props.updateChange} defaultValue={props.name} type="text" name="name" id="edit-name" />
                            {console.log(props)}
                        </div>
                        <div>
                            <label htmlFor="l-name">Image Url</label>
                            <input onChange={props.updateChange} defaultValue={props.url} type="text" name="url" id="edit-url" />
                        </div>
                        <div>
                            <label className="title" htmlFor="more-info">Description</label>
                            <textarea onChange={props.updateChange} defaultValue={props.description} className="text-area" name="description" id="edit-description" rows="10" cols="40"></textarea>
                        </div>
                        <div>
                            <label>Landscape type:
                            <select onChange={props.updateChange} id="edit-l" name="landscapeType" >
                                <option className="select-form--dim" value="null">Select an option:</option>
                                <option value="beach">Beach</option>
                                <option value="mountain">Mountains</option>
                                <option value="lake">Lake</option>
                            </select>
                            </label>
                            <label>Length of trip:
                            <select onChange={props.updateChange} id="edit-d" name="days">
                                <option className="select-form--dim" value="null">Select an option:</option>
                                <option value="2day">2 Day</option>
                                <option value="3day">3 Day</option>
                                <option value="week">Week</option>
                            </select>
                            </label>
                            <label>Choose price:
                            <select onChange={props.updateChange} id="edit-p" name="price">
                                <option className="select-form--dim" value="null">Select an option:</option>
                                <option value="200">$200</option>
                                <option selected="selected" value="500">$500</option>
                                <option value="1000">$1000</option>
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