function getEnergyFlow() {
    return [{
        "flow_id": 1,
        "source_component": "solar",
        "target_component": "house",
        "power_kw": 3.0,
        "timestamp": "2025-02-24T12:00:00Z",
        "status": "active"
    },
    {
        "flow_id": 2,
        "source_component": "solar",
        "target_component": "grid",
        "power_kw": 5.5,
        "timestamp": "2025-02-24T12:00:00Z",
        "status": "active"
    }];
}

export { getEnergyFlow }