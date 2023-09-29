import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {
  static async create(note) {
    return axios.post(`${BASE_URL}`, note).data;
  }

  static async fetchAll() {
    return axios.get(`${BASE_URL}`).data;
  }

  static async fetchById(noteId) {
    return axios.get(`${BASE_URL}/${noteId}`).data;
  }

  static async deleteById(noteId) {
    return axios.delete(`${BASE_URL}/${noteId}`).data;
  }

  static async update(note) {
    return axios.patch(`${BASE_URL}/${note.id}`, note).data;
  }
}
