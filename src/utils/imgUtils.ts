import goodStorage from 'good-storage';
export class ImgUtil
{
  static imgList:Record<string,string>={}
  static storageImgList()
  {
    this.imgList=goodStorage.get('imglist')||{}
    if(this.isEmpty())
    {
      this.loadAllImg()
      goodStorage.set('imglist',this.imgList)
    }
  }
  static isEmpty()
  {
    return !Object.getOwnPropertyNames(this.imgList).length
  }
  static loadAllImg()
  {
   const imgMap= import.meta.globEager('../assets/img/**/*.png')
   console.log("imgMap",imgMap);
   let absolutePath:string=''
   let imgName:string=''
   for(let relativePath in imgMap)
   {
    absolutePath=imgMap[relativePath].default
    if(absolutePath)
    {
      imgName=absolutePath.substring(absolutePath.lastIndexOf("/")+1)
      this.imgList[imgName]=absolutePath
    }
   }
   console.log("this.imgList",this.imgList);
   
  }
}