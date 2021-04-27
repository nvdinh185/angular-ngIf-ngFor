import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent {
  vn: string;
  en: string;
  isShow = false;
  filterStatus = "tat_ca";
  arWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, onEdit: false },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, onEdit: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, onEdit: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, onEdit: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, onEdit: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, onEdit: false }
  ];

  constructor() { }

  /**
   * Thêm từ mới vào danh sách
   */
  addWord() {
    let word = { id: this.arWords.length + 1, en: this.en, vn: this.vn, memorized: false, onEdit: false };
    this.arWords.unshift(word);
    this.isShow = !this.isShow;
    this.en = '';
    this.vn = '';
  }

  /**
   * Xóa một từ với id
   * @param id 
   */
  deleteWord(id) {
    let index = this.arWords.findIndex(e => e.id == id);
    this.arWords.splice(index, 1);
  }

  /**
   * Hiển thị form sửa
   * @param id 
   */
  edit(id) {
    let index = this.arWords.findIndex(e => e.id == id);
    this.en = this.arWords[index].en;
    this.vn = this.arWords[index].vn;
    this.arWords[index].onEdit = true;
  }

  /**
   * Sửa từ
   * @param id 
   */
  editWord(id) {
    let index = this.arWords.findIndex(e => e.id == id);
    let newWord = {
      id: this.arWords[index].id, en: this.en, vn: this.vn,
      memorized: this.arWords[index].memorized, onEdit: this.arWords[index].onEdit
    };
    this.arWords = this.arWords.map(word => (word.id === newWord.id ? newWord : word));
    this.arWords[index].onEdit = false;
    this.en = '';
    this.vn = '';
  }

  /**
   * Xác định trạng thái hiển thị của một từ
   * @param memorized 
   */
  getShowStatus(memorized) {
    let xemTatCa = this.filterStatus == 'tat_ca';
    let xemDaNho = this.filterStatus == 'da_nho' && memorized;
    let xemChuaNho = this.filterStatus == 'chua_nho' && !memorized;
    return xemTatCa || xemDaNho || xemChuaNho;
  }

}
