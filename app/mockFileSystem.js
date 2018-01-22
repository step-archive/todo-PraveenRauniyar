class MockFileSystem {
  constructor(){
    this.files = {};
  };
  addFile(fileName,content=""){
    this.files[fileName] = content;
  }

  existsSync(fileName){
    return Object.keys(this.files).includes(fileName);
  }
  readFileSync(fileName,encoding){
    if(!this.existsSync(fileName)){
      throw new Error('File not found');
    }
    return this.files[fileName];
  }
  writeFileSync(fileName,content){
    this.files[fileName] = content;
  }
}

module.exports = MockFileSystem;