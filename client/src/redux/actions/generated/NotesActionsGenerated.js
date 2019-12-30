/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e0a83fba4f4b55911b4845a
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN NotesActionsGenerated.js PLEASE EDIT ../NotesActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import NotesApi from "../../../api/NotesApi";

let actionsFunction = {

  //CRUD METHODS

  // Delete notes
  deleteNotes: function(id) {
    return function(dispatch) {
      return NotesApi
        .deleteNotes(id)
        .then(notes => {
          dispatch(actionsFunction.deleteNotesSuccess(notes));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteNotesSuccess: function(notes) {
    return { type: types.DELETE_NOTES_SUCCESS, payload: notes };
  },

  // Load  list
  loadNotesList: function() {
    return function(dispatch) {
      return NotesApi
        .getNotesList()
        .then(list => {
          dispatch(actionsFunction.loadNotesListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadNotesListSuccess: function(list) {
    return { type: types.LIST_NOTES_SUCCESS, payload: list };
  },


};

export default actionsFunction;
