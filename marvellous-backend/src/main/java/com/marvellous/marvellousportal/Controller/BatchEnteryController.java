package com.marvellous.marvellousportal.Controller;

import com.marvellous.marvellousportal.Entity.BatchEntry;
import com.marvellous.marvellousportal.Service.BatchEntryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/batches")
public class BatchEnteryController
{
    @Autowired
    private BatchEntryService service;

    @GetMapping
    public ResponseEntity<List<BatchEntry>> getAll()
    {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BatchEntry> getById(@PathVariable String id)
    {
        return ResponseEntity.ok(service.getById(id));
    }

    @PostMapping
    public ResponseEntity<BatchEntry> create(@Valid @RequestBody BatchEntry entry)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(entry));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BatchEntry> update(@PathVariable String id,
                                             @Valid @RequestBody BatchEntry entry)
    {
        return ResponseEntity.ok(service.update(id, entry));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id)
    {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}