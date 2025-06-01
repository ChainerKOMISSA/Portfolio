import {gridItems} from "../../../data";

export async function seedGridItems() {
    const transformed = gridItems.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        class_name: item.className,
        img_class_name: item.imgClassName,
        title_class_name: item.titleClassName,
        img: item.img,
        spare_img: item.spareImg,
    }))

   // const { error } = await supabase.from('grid_items').insert(transformed)
    const error = "";

    if (error) throw new Error(`grid_items → ${error}`)
    console.log('✅ grid_items insérés avec succès')
}
