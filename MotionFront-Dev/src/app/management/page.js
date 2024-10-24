'use client';
import styles from "@/styles/management/management.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchRecords, createOrUpdateRecord, deleteRecord } from '@/services/records.services';

export default function Management() {
    const [add, setAdd] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({
        brand: '',
        location: '',
        candidate: '',
        id: null
    });

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        async function getRecords() {
            try {
                const records = await fetchRecords();
                setData(records);
            } catch (error) {
                setError(error.message);
                setTimeout(() => {
                    setError('');
                }, 2000);
            }
        }
        getRecords();
    }, []);

    const handleChangeAdd = () => {
        setAdd(prev => !prev);
        resetInputs();
        setEditingId(null);
    };

    const resetInputs = () => {
        setInputs({ brand: '', location: '', candidate: '', id: null });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputs({
            ...inputs,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedOrNewRecord = await createOrUpdateRecord(inputs);

            if (inputs.id) {
                setData(data.map(record => record.id === updatedOrNewRecord.id ? updatedOrNewRecord : record));
            } else {
                setData([updatedOrNewRecord, ...data]);
            }

            const records = await fetchRecords();
            setData(records);

            resetInputs();
            setAdd(false);
            setEditingId(null);
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    const handleEdit = (record) => {
        setInputs({
            brand: record.brand,
            location: record.location,
            candidate: record.candidate,
            id: record.id
        });
        setAdd(true);
        setEditingId(record.id);
    };

    const handleDelete = async (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            try {
                await deleteRecord(id);

                const records = await fetchRecords();
                setData(records);
            } catch (error) {
                setError(error.message);
                setTimeout(() => {
                    setError('');
                }, 2000);
            }
        }
    };

    return (
        <div className={styles.container}>
            <Link className={styles.back} href={'/'}>
                <Image src={'/images/arrow-left.svg'} alt="arrow-right" width={40} height={40} />
            </Link>
            <form className={`${styles.card} ${add && styles.cardExpanded}`}>
                <div onClick={handleChangeAdd} className={styles.createAction}>
                    <Image src={'/images/icon_crear.svg'} alt="create icon" width={20} height={20} />
                </div>
                <div className={styles.brandContainer}>
                    <label htmlFor="brand" className={styles.label}>
                        <Image src={!add ? '/images/Icon_vehiculo.svg' : '/images/Icon_vehiculo1.svg'} alt="" width={30} height={30} />
                    </label>
                    <input disabled={!add} value={inputs.brand} onChange={handleInputChange} id="brand" className={styles.input} />
                </div>
                <div className={styles.locationContainer}>
                    <label htmlFor="location" className={styles.label}>
                        <Image src={!add ? '/images/Icon_puntoubicacion.svg' : '/images/Icon_puntoubicacion1.svg'} alt="" width={30} height={30} />
                    </label>
                    <input disabled={!add} value={inputs.location} onChange={handleInputChange} id="location" className={styles.input} />
                </div>
                <div className={styles.nameContainer}>
                    <label htmlFor="candidate" className={styles.label}>
                        <Image src={!add ? '/images/Icon_persona.svg' : '/images/Icon_persona1.svg'} alt="" width={30} height={30} />
                    </label>
                    <input disabled={!add} value={inputs.candidate} onChange={handleInputChange} id="candidate" className={styles.input} />
                </div>
                <div className={`${styles.btnContent} ${add && styles.visible}`} data-active={add}>
                    {
                        inputs.id ?
                            <Image src={'/images/Icon_cancelar.svg'} onClick={handleChangeAdd} style={{ cursor: 'pointer' }} alt="" width={22} height={22} />
                            : <button type="button" onClick={handleChangeAdd} className={`${styles.btn} ${styles.btnCancel}`}>Cancelar</button>
                    }
                    {
                        inputs.id ?
                            <Image src={'/images/Icon_confirmar.svg'} onClick={handleSubmit} style={{ cursor: 'pointer' }} alt="" width={22} height={22} />
                            : <button onClick={handleSubmit} type="submit" className={`${styles.btn} ${styles.btnCreate}`}>Crear</button>
                    }
                </div>
            </form>
            <div className={styles.tableContainer}>
                {!data ? null :
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Sucursal</th>
                                <th colSpan="2">Aspirante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dat, _index) => (
                                <tr key={_index}>
                                    <td>{dat.brand}</td>
                                    <td>{dat.location}</td>
                                    <td>
                                        <label>{dat.candidate}</label>
                                    </td>
                                    <td>
                                        <div>
                                            <Image
                                                className={styles.btnActionTable}
                                                src={editingId === dat.id || !add ? '/images/Icon_editar1.svg' : '/images/Icon_editar.svg'}
                                                alt="edit"
                                                width={25}
                                                height={25}
                                                onClick={() => !add && handleEdit(dat)}
                                            />
                                            <Image
                                                className={styles.btnActionTable}
                                                src={editingId === dat.id || !add ? '/images/Icon_eliminar1.svg' : '/images/Icon_eliminar.svg'}
                                                alt="delete"
                                                width={25}
                                                height={25}
                                                onClick={() => !add && handleDelete(dat.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                {error && <p className={styles.error}>{error}</p>}
            </div>
            <div className={styles.contentBottom}>
                <Image src={'/images/Imagologotipo_motion.svg'} alt="logo type" width={200} height={350} />
            </div>
        </div>
    );
}