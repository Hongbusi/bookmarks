import sparkMd5 from 'spark-md5'

export function ext(filename: string) {
  return filename.split('.').pop()
}

/**
 * 计算文件的哈希值（通过抽样方式）
 * @param {File} file - 要计算哈希值的文件
 * @returns {Promise<string>} hash 值
 */
export async function calculateFileSamplingHash(file: File): Promise<string> {
  return new Promise<string>((resolve) => {
    const spark = new sparkMd5.ArrayBuffer()
    const reader = new FileReader()

    const fileSize = file.size
    const chunkSize = 1 * 1024 * 1024 // 1M

    const chunks = [file.slice(0, chunkSize)]

    let currentOffset = chunkSize

    // 循环，处理文件的不同块
    while (currentOffset < fileSize) {
      if (currentOffset + chunkSize >= fileSize) {
        // 如果是最后一块，将整块添加到数组
        chunks.push(file.slice(currentOffset, currentOffset + chunkSize))
      }
      else {
        // 对于中间的块，取前两个字节，中间两个字节和最后两个字节
        const mid = currentOffset + chunkSize / 2
        const end = currentOffset + chunkSize
        chunks.push(file.slice(currentOffset, currentOffset + 2))
        chunks.push(file.slice(mid, mid + 2))
        chunks.push(file.slice(end - 2, end))
      }
      currentOffset += chunkSize
    }

    // 使用 FileReader 读取所有块的内容
    reader.readAsArrayBuffer(new Blob(chunks))

    // 当 FileReader 加载完成时，将数据追加到 SparkMD5 中并解析哈希值
    reader.onload = (e) => {
      spark.append(e.target!.result as ArrayBuffer)
      resolve(spark.end())
    }
  })
}
