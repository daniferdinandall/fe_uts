import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    // console.log(value)
    let content =
        isiTabel.replace("#NAMA#", value.mahasiswa.nama)
            .replace("#NPM#", value.mahasiswa.npm)
            .replace("#PROGRAM_STUDI#", value.mahasiswa.program_studi?value.mahasiswa.program_studi.nama:"#PROGRAM_STUDI#")
            .replace("#FAKULTAS#", value.mahasiswa.fakultas?value.mahasiswa.fakultas.nama:"#FAKULTAS#")
            .replace("#MATKUL#", value.mata_kuliah?value.mata_kuliah[0].kode_matkul:"#MATKUL#")
            .replace("#NILAI#", value.mata_kuliah?value.mata_kuliah[0].nama:"#NILAI#")
            .replace("#MATKUL#", value.mata_kuliah?value.mata_kuliah[1].kode_matkul:"#MATKUL1#")
            .replace("#NILAI#", value.mata_kuliah?value.mata_kuliah[1].nama:"#NILAI1#")
            .replace("#MATKUL#", value.mata_kuliah?value.mata_kuliah[2].kode_matkul:"#MATKUL2#")
            .replace("#NILAI#", value.mata_kuliah?value.mata_kuliah[2].nama:"#NILAI2#")
            .replace("#MATKUL#", value.mata_kuliah?value.mata_kuliah[3].kode_matkul:"#MATKUL3#")
            .replace("#NILAI#", value.mata_kuliah?value.mata_kuliah[3].nama:"#NILAI3#")
            // .replace("#WARNA#", getRandomColor())
            // .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}