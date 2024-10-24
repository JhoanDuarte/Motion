export const fetchRecords = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Aún no hay registros disponibles');
    }

    const res = await response.json();
    return res.reverse();
};

export const createOrUpdateRecord = async (inputs) => {
    const url = inputs.id
        ? `${process.env.NEXT_PUBLIC_API_URL}/records/${inputs.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/records`;

    const method = inputs.id ? 'PUT' : 'POST';

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            brand: inputs.brand,
            location: inputs.location,
            candidate: inputs.candidate,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error al ${inputs.id ? 'actualizar' : 'crear'} el registro`);
    }

    return await response.json();
};

export const deleteRecord = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Error al eliminar el registro');
    }
};