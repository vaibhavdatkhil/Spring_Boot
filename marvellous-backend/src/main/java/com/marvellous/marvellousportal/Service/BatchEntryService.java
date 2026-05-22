package com.marvellous.marvellousportal.Service;

import com.marvellous.marvellousportal.Entity.BatchEntry;
import com.marvellous.marvellousportal.Exception.BatchNotFoundException;
import com.marvellous.marvellousportal.Repository.BatchEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BatchEntryService
{
    @Autowired
    private BatchEntryRepository repo;

    public List<BatchEntry> getAll()
    {
        return repo.findAll();
    }

    public BatchEntry getById(String id)
    {
        return repo.findById(id)
                .orElseThrow(() -> new BatchNotFoundException(id));
    }

    public BatchEntry create(BatchEntry entry)
    {
        return repo.save(entry);
    }

    public BatchEntry update(String id, BatchEntry entry)
    {
        BatchEntry existing = getById(id);
        existing.setName(entry.getName());
        existing.setFees(entry.getFees());
        return repo.save(existing);
    }

    public void delete(String id) {
        if (!repo.existsById(id)) {
            throw new BatchNotFoundException("Batch not found with id: " + id);
        }
        repo.deleteById(id);
    }
}