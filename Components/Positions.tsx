import ShowOnScroll from "components/ShowOnScroll"

export default function Positions() {
    interface positions {
        title: string,
        technologies?: string[],
    }

    const positions: positions[] = [
        {
            title: 'Help Desk',
            technologies: ['ITSM Remedy', 'Polycom', 'Troubleshooting', 'Remotely assistance to airports'],
        },
        {
            title: 'Field Support',
            technologies: ['Diagnosis and repair-notebooks and PCs', 'Multifunctions printers', 'Scripting', 'BlackBerry VIP assistance', 'Sysprep'],
        },
        {
            title: 'IT principal consultant',
            technologies: ['Diagnosis and repair-notebooks and PCs', 'Multifunctions printers', 'Scripting', 'BlackBerry VIP assistance', 'Sysprep'],
        },
        {
            title: 'SysAdmin',
            technologies: ['Diagnosis and repair-notebooks and PCs', 'Multifunctions printers', 'Scripting', 'BlackBerry VIP assistance', 'Sysprep'],
        },
        {
            title: 'Full-Stack Web Developer',
            technologies: ['Diagnosis and repair-notebooks and PCs', 'Multifunctions printers', 'Scripting', 'BlackBerry VIP assistance', 'Sysprep'],
        }

    ]

    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-y-4 gap-x-2">
            {positions
                .map((position, positionIndex) => (

                    <ShowOnScroll
                        className="duration-500 text-green-400 gap-x-2 group  flex"
                        offset={200}
                        key={position.title + positionIndex}
                        style={{ transitionDelay: `${100 * positionIndex}ms` }}
                    >

                        <div className="flex flex-col flex-nowrap">
                            <label className='border-[1px] border-green-800 p-1 whitespace-nowrap duration-100 group-hover:rounded-xl' >{position.title}</label>
                            {
                                position?.technologies?.map((technology, techIndex) => (
                                    <label
                                        key={technology}
                                        style={{ transitionDelay: `${100 * techIndex}ms` }}
                                        className='p-1 text-xs duration-75 group-hover:text-green-300 text-green-900'
                                    >
                                        {technology}
                                    </label>
                                ))
                            }
                        </div>
                        {positionIndex !== positions.length - 1 && <span className="hidden sm:block">{` >> `}</span>}

                    </ShowOnScroll>
                ))}
        </div>
    )
}
