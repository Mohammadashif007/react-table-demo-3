import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import mData from "./../../../menu.json";
import { useMemo } from "react";
import "./BasicTable.css";

const BasicTable = () => {
    const data = useMemo(() => mData, []);

    /*
    
            "id": 86,
        "first_name": "Ophelia",
        "last_name": "Lindblad",
        "email": "olindblad2d@businesswire.com",
        "gender": "Female",
        "dob": "9/15/1916",
        "image": "http://dummyimage.com/158x100.png/ff4444/ffffff"

    */

    const columns = [
        {
            header: "ID",
            accessorKey: "_id",
        },
        {
            header: " Name",
            accessorKey: "name",
        },
        // {
        //     header: "Last Name",
        //     accessorKey: "last_name",
        // },
        {
            header: "Price",
            accessorKey: "price",
        },
        {
            header: "Category",
            accessorKey: "category",
        },
        {
            header: "Recipe",
            accessorKey: "recipe",
        },
        {
            header: "Image",
            accessorKey: "image",
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <table>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {cell.column.columnDef.accessorKey ===
                                    "image" ? (
                                        <img
                                            src={row.original.image}
                                            alt={`Image for ${row.original.first_name}`}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    ) : (
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BasicTable;
